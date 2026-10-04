import { defineStore } from "pinia";
import { ref } from "vue";
import type { IGame } from "@/models/IGame";

export const usesSkill = (game: IGame, skill: string) =>
  game.engine === skill || game.languages.includes(skill) || game.platforms.includes(skill);

export const useSkillFilterStore = defineStore("skillFilter", () => {
  const active = ref<string | null>(null);

  const toggle = (skill: string) => {
    active.value = active.value === skill ? null : skill;
  };

  const clear = () => {
    active.value = null;
  };

  return { active, toggle, clear };
});
