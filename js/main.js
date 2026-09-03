// ===== Peace & Purpose — Shared JS =====

document.addEventListener('DOMContentLoaded', function () {

  // Footer year, everywhere
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // ---- Scroll-reveal animations ----
  var revealSelectors = [
    '.service-card', '.card', '.faq-item', '.about-copy', '.avatar-photo',
    '.booking-form', '.expect-box', '.contact-photo', '.location-banner',
    '.still-questions', '.page-head', '.tos-agree'
  ];
  var revealEls = document.querySelectorAll(revealSelectors.join(','));

  if ('IntersectionObserver' in window && revealEls.length) {
    revealEls.forEach(function (el) { el.classList.add('reveal'); });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          // slight stagger for elements revealing together
          setTimeout(function () {
            entry.target.classList.add('in-view');
          }, i * 60);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    // no IntersectionObserver support — just show everything
    revealEls.forEach(function (el) { el.classList.add('in-view'); });
  }

  // ---- Preferred date & time slot picker ----
  (function () {
    var addBtn = document.getElementById('add-slot-btn');
    if (!addBtn) return; // only present on the booking page

    var dialog = document.getElementById('slot-dialog');
    var chipsWrap = document.getElementById('slot-chips');
    var maxSlots = 3;
    var slots = [];

    var calTitle = document.getElementById('cal-title');
    var calGrid = document.getElementById('cal-grid');
    var prevBtn = document.getElementById('cal-prev');
    var nextBtn = document.getElementById('cal-next');
    var okBtn = document.getElementById('picker-ok');
    var cancelBtn = document.getElementById('picker-cancel');

    var hourEl = document.getElementById('time-hour');
    var minEl = document.getElementById('time-min');
    var previewEl = document.getElementById('time-preview');
    var ampmBtns = document.querySelectorAll('.ampm-btn');

    var today = new Date();
    today.setHours(0, 0, 0, 0);

    var view = { year: today.getFullYear(), month: today.getMonth() };
    var selectedDate = null;
    var time = { hour: 1, min: 30, ampm: 'AM' };

    var weekdayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    function pad(n) { return n < 10 ? '0' + n : '' + n; }

    function renderCalendar() {
      calTitle.textContent = monthNames[view.month] + ' ' + view.year;
      calGrid.innerHTML = '';
      weekdayNames.forEach(function (w) {
        var el = document.createElement('div');
        el.className = 'cal-weekday';
        el.textContent = w;
        calGrid.appendChild(el);
      });

      var firstDay = new Date(view.year, view.month, 1);
      var startOffset = firstDay.getDay();
      var daysInMonth = new Date(view.year, view.month + 1, 0).getDate();
      var prevMonthDays = new Date(view.year, view.month, 0).getDate();

      for (var i = 0; i < 42; i++) {
        var dayNum, cellDate, otherMonth = false;
        if (i < startOffset) {
          dayNum = prevMonthDays - startOffset + i + 1;
          cellDate = new Date(view.year, view.month - 1, dayNum);
          otherMonth = true;
        } else if (i >= startOffset + daysInMonth) {
          dayNum = i - startOffset - daysInMonth + 1;
          cellDate = new Date(view.year, view.month + 1, dayNum);
          otherMonth = true;
        } else {
          dayNum = i - startOffset + 1;
          cellDate = new Date(view.year, view.month, dayNum);
        }
        cellDate.setHours(0, 0, 0, 0);

        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'cal-day' + (otherMonth ? ' other-month' : '');
        btn.textContent = dayNum;

        if (cellDate.getTime() === today.getTime()) btn.classList.add('today');
        if (selectedDate && cellDate.getTime() === selectedDate.getTime()) btn.classList.add('selected');
        if (cellDate < today) btn.disabled = true;

        (function (cd) {
          btn.addEventListener('click', function () {
            selectedDate = cd;
            okBtn.disabled = false;
            renderCalendar();
          });
        })(cellDate);

        calGrid.appendChild(btn);
      }
    }

    function renderTime() {
      hourEl.textContent = time.hour;
      minEl.textContent = pad(time.min);
      ampmBtns.forEach(function (b) {
        b.classList.toggle('active', b.dataset.ampm === time.ampm);
      });
      previewEl.textContent = time.hour + ':' + pad(time.min) + ' ' + time.ampm;
    }

    prevBtn.addEventListener('click', function () {
      view.month--; if (view.month < 0) { view.month = 11; view.year--; }
      renderCalendar();
    });
    nextBtn.addEventListener('click', function () {
      view.month++; if (view.month > 11) { view.month = 0; view.year++; }
      renderCalendar();
    });

    document.getElementById('hour-up').addEventListener('click', function () {
      time.hour = time.hour === 12 ? 1 : time.hour + 1; renderTime();
    });
    document.getElementById('hour-down').addEventListener('click', function () {
      time.hour = time.hour === 1 ? 12 : time.hour - 1; renderTime();
    });
    document.getElementById('min-up').addEventListener('click', function () {
      time.min = (time.min + 5) % 60; renderTime();
    });
    document.getElementById('min-down').addEventListener('click', function () {
      time.min = (time.min - 5 + 60) % 60; renderTime();
    });
    ampmBtns.forEach(function (b) {
      b.addEventListener('click', function () { time.ampm = b.dataset.ampm; renderTime(); });
    });

    function syncHiddenInputs() {
      for (var i = 1; i <= maxSlots; i++) {
        var input = document.getElementById('slot' + i + '-input');
        if (input) input.value = slots[i - 1] ? slots[i - 1].label : '';
      }
    }

    function updateChips() {
      chipsWrap.innerHTML = '';
      slots.forEach(function (s, idx) {
        var chip = document.createElement('span');
        chip.className = 'slot-chip';
        var text = document.createElement('span');
        text.textContent = s.label;
        chip.appendChild(text);
        var rm = document.createElement('button');
        rm.type = 'button';
        rm.setAttribute('aria-label', 'Remove this time slot');
        rm.textContent = '✕';
        rm.addEventListener('click', function () {
          slots.splice(idx, 1);
          syncHiddenInputs();
          updateChips();
        });
        chip.appendChild(rm);
        chipsWrap.appendChild(chip);
      });
      addBtn.disabled = slots.length >= maxSlots;
      addBtn.textContent = slots.length >= maxSlots
        ? 'Maximum 3 slots added'
        : (slots.length === 0 ? '+ Add a time slot' : '+ Add another time slot');
    }

    addBtn.addEventListener('click', function () {
      if (slots.length >= maxSlots) return;
      selectedDate = null;
      time = { hour: 1, min: 30, ampm: 'AM' };
      view = { year: today.getFullYear(), month: today.getMonth() };
      okBtn.disabled = true;
      renderCalendar();
      renderTime();
      dialog.showModal();
    });

    cancelBtn.addEventListener('click', function () { dialog.close(); });

    okBtn.addEventListener('click', function () {
      if (!selectedDate) return;
      var dateLabel = weekdayNames[selectedDate.getDay()] + ', ' + selectedDate.getDate() +
        ' ' + monthNames[selectedDate.getMonth()].slice(0, 3) + ' ' + selectedDate.getFullYear();
      var label = dateLabel + ' · ' + time.hour + ':' + pad(time.min) + ' ' + time.ampm;
      slots.push({ label: label });
      syncHiddenInputs();
      updateChips();
      dialog.close();
    });

    updateChips();
  })();

  // ---- Button ripple effect ----
  document.querySelectorAll('.btn, button').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      var rect = btn.getBoundingClientRect();
      var ripple = document.createElement('span');
      var size = Math.max(rect.width, rect.height);
      var x = (e.clientX || rect.left + rect.width / 2) - rect.left - size / 2;
      var y = (e.clientY || rect.top + rect.height / 2) - rect.top - size / 2;

      ripple.className = 'ripple';
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';

      btn.appendChild(ripple);
      ripple.addEventListener('animationend', function () { ripple.remove(); });
    });
  });

  // Booking form -> Web3Forms
  var form = document.getElementById('booking-form');
  if (form) {
    var status = document.getElementById('form-status');

    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      var slot1 = document.getElementById('slot1-input');
      if (slot1 && !slot1.value) {
        status.className = 'err';
        status.textContent = 'Please add at least one preferred time slot.';
        return;
      }

      status.className = '';
      status.textContent = 'Sending...';

      var formData = new FormData(form);

      try {
        var response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' }
        });
        var result = await response.json();

        if (result.success) {
          status.textContent = "Thank you — I'll get back to you within a day.";
          status.className = 'ok';
          form.reset();
        } else {
          status.textContent = 'Something went wrong. Please try again or reach out directly.';
          status.className = 'err';
        }
      } catch (err) {
        status.textContent = 'Network error — please check your connection and try again.';
        status.className = 'err';
      }
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      var isOpen = item.classList.contains('open');

      // close all others (single-open accordion)
      document.querySelectorAll('.faq-item.open').forEach(function (openItem) {
        if (openItem !== item) openItem.classList.remove('open');
      });

      item.classList.toggle('open', !isOpen);
      btn.setAttribute('aria-expanded', String(!isOpen));
    });
  });

});
