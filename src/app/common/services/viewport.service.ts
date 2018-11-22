import { SmallService } from './small.service';
import { LargeService } from './large.service';

export class ViewportService {
    public determineService() {
        const width: number = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if (width < 800) {
            return new SmallService();
        }
        return new LargeService();
    }
}
