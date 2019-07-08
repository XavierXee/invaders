import { Report } from '../interfaces/report';
import { Matrix } from './matrix';
import { SpaceInvader } from './space-invader';

export class Radar extends Matrix {

    private reports: Report[];

    constructor(data: string) {
        super(data);
        this.reports = [];
    }

    private compareZones (source: string, target: string): number {
        let diff = 0;
        Array.from(source).forEach((point, index) => {
            if (point !== target[index]) diff++;
        });
        return diff;
    }

    private process(target: SpaceInvader, xIndex: number, yIndex: number): number {
        let zoneWidth = xIndex > this.width - target.width ? this.width - xIndex : target.width;
        zoneWidth = xIndex < 0 ? this.width + xIndex : zoneWidth;

        let zoneHeight = yIndex > this.height - target.height ? this.height - yIndex : target.height;
        zoneHeight = yIndex < 0 ? this.height + yIndex : zoneHeight;

        const xStart = xIndex < 0 ? Math.abs(xIndex) : 0;
        const yStart = yIndex < 0 ? Math.abs(yIndex) : 0;

        const spaceInvaderZone = target.getZone(xStart, zoneWidth, yStart, zoneHeight);

        let zoneYStart = yIndex < 0 ? 0 : yIndex;
        let zoneXStart = xIndex < 0 ? 0 : xIndex;

        const zone = this.getZone(zoneXStart, zoneWidth, zoneYStart, zoneHeight);

        return this.compareZones(zone, spaceInvaderZone);
    }

    public startSpaceInvadersDetection(input: SpaceInvader[]): Report[] {
        this.reports = [];
        if (!input) return this.reports;

        input.forEach((target) => {
            const xStart = -target.getMedianWidth();
            const xEnd = this.width - target.width + target.getMedianWidth();
            const yStart = -target.getMedianHeight();
            const yEnd = this.height - target.height + target.getMedianHeight();

            for(let yIndex = yStart; yIndex < yEnd; yIndex++) {
                for(let xIndex = xStart; xIndex < xEnd; xIndex++) {
                    const diff = this.process(target, xIndex, yIndex);

                    if (diff < target.getMaxDiffToDetect()) {
                        this.reports.push({
                            coord: {x: xIndex, y: yIndex},
                            target,
                            diff
                        });
                    }
                }
            }
        });

        return this.reports;
    }
}