import { compute } from './compute';

describe('compute', () => {
    it('shoud return 0 if input is negative', () => {
        const result = compute(-1);
        expect(result).toBe(0);
    });

    it('should increase number if input is positive', () => {
        const result = compute(2);
        expect(result).toBeGreaterThan(0);
    })
})