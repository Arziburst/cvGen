// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './slice';

// State
export type Skill = {
    id: string
    skill: string
}
export type SkillsState = Array<Skill>

type SkillOption = {
    type: keyof typeof initialState
    data: Skill
}
// Contracts
export type BaseContact<T = SkillOption> = CaseReducer<SkillsState, PayloadAction<T>>
