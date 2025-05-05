import { useState, useEffect } from "react";
import { useFilterStore } from "@/features/shop/shop.state";

const MIN_GAP = 10;
const DEFAULT_MIN = 0;
const DEFAULT_MAX = 2000;

export const usePriceFilter = () => {
    const { price, setPrice } = useFilterStore();
    const [min, setMin] = useState<number | null>(price[0]);
    const [max, setMax] = useState<number | null>(price[1]);
    const [enabled, setEnabled] = useState<boolean>(price[0] !== null && price[1] !== null);

    useEffect(() => {
        if (!enabled) {
            setPrice([0, 0]);
            return;
        }

        if (min !== null && max !== null && max - min >= MIN_GAP) {
            setPrice([min, max]);
        }
    }, [min, max, enabled, setPrice]);

    const handleMinChange = (value: number) => {
        setMin(Math.min(value, (max ?? DEFAULT_MAX) - MIN_GAP));
    };

    const handleMaxChange = (value: number) => {
        setMax(Math.max(value, (min ?? DEFAULT_MIN) + MIN_GAP));
    };

    const toggleEnabled = () => {
        const next = !enabled;
        setEnabled(next);
        if (!next) {
            setMin(null);
            setMax(null);
            setPrice([0, 0]);
        } else {
            setMin(DEFAULT_MIN);
            setMax(DEFAULT_MAX);
        }
    };

    return {
        min,
        max,
        enabled,
        handleMinChange,
        handleMaxChange,
        toggleEnabled,
    };
};
