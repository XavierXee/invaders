import { Coord } from './coord';
import { SpaceInvader } from "../core/space-invader";

export interface Report {
    coord: Coord;
    target: SpaceInvader;
    diff: number;
}