"use client";

import { AnimateIcon } from "@/components/animate-ui/icons/icon";
import { Heart } from "@/components/animate-ui/icons/heart";
import { Clock } from "@/components/animate-ui/icons/clock";
import { Lock } from "@/components/animate-ui/icons/lock";
import { Search } from "@/components/animate-ui/icons/search";
import { UserRound } from "@/components/animate-ui/icons/user-round";
import { UsersRound } from "@/components/animate-ui/icons/users-round";
import { Sparkles } from "@/components/animate-ui/icons/sparkles";
import { MessageSquareMore } from "@/components/animate-ui/icons/message-square-more";
import { MessageCircleHeart } from "@/components/animate-ui/icons/message-circle-heart";
import { PhoneCall } from "@/components/animate-ui/icons/phone-call";
import { Star } from "@/components/animate-ui/icons/star";
import { Blocks } from "@/components/animate-ui/icons/blocks";

const components = {
  heart: Heart,
  clock: Clock,
  lock: Lock,
  search: Search,
  "user-round": UserRound,
  "users-round": UsersRound,
  sparkles: Sparkles,
  "message-square-more": MessageSquareMore,
  "message-circle-heart": MessageCircleHeart,
  "phone-call": PhoneCall,
  star: Star,
  blocks: Blocks,
};

const animations = {
  heart: "fill",
  clock: "default",
  lock: "lock",
  search: "find",
  "user-round": "default",
  "users-round": "default",
  sparkles: "default",
  "message-square-more": "default",
  "message-circle-heart": "default",
  "phone-call": "default",
  star: "fill",
  blocks: "default-loop",
};

/** Icon badge that plays its signature micro-animation whenever the parent card is hovered. */
export function AnimatedIcon({ name, hovered = false }) {
  const Icon = components[name];
  if (!Icon) return null;
  const animation = animations[name] || "default";

  return (
    <span className="animated-icon-motion-target">
      <AnimateIcon
        animate={hovered}
        animateOnHover
        loop={hovered}
        loopDelay={800}
        animation={animation}
      >
        <Icon className="animated-icon" size={20} animation={animation} animate={hovered} />
      </AnimateIcon>
    </span>
  );
}
