"use client";
import { useState, useEffect } from "react";
import { useFilterStore } from "@/features/shop/shop.state";

export const FilterPrice = () => {
    const { price, setPrice } = useFilterStore();
    const [min, setMin] = useState<number | null>(price[0]);
    const [max, setMax] = useState<number | null>(price[1]);
    const [enabled, setEnabled] = useState<boolean>(price[0] !== null && price[1] !== null);

    const MIN_GAP = 10;

    useEffect(() => {
        if (!enabled) {
            setPrice([0, 0]);
            return;
        }

        // Only update the store if min & max are valid
        if (min !== null && max !== null && max - min >= MIN_GAP) {
            setPrice([min, max]);
        }
    }, [min, max, enabled]);

    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(+e.target.value, (max ?? 2000) - MIN_GAP);
        setMin(value);
    };

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(+e.target.value, (min ?? 0) + MIN_GAP);
        setMax(value);
    };

    const toggleEnabled = () => {
        const next = !enabled;
        setEnabled(next);
        if (!next) {
            setMin(null);
            setMax(null);
            setPrice([0, 0]);
        } else {
            setMin(0);
            setMax(2000);
        }
    };

    return (
        <div>
            <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold">Plage de prix</h3>
                <button
                    className="btn btn-xs btn-outline"
                    onClick={toggleEnabled}
                >
                    {enabled ? "Retirer" : "Ajouter"}
                </button>
            </div>

            {enabled && (
                <>
                    <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                            <input
                                type="number"
                                className="input input-bordered w-20 text-sm"
                                value={min ?? ""}
                                onChange={handleMinChange}
                                disabled={max === null}
                            />
                            <span>€</span>
                        </div>
                        <span>-</span>
                        <div className="flex items-center space-x-1">
                            <input
                                type="number"
                                className="input input-bordered w-20 text-sm"
                                value={max ?? ""}
                                onChange={handleMaxChange}
                                disabled={min === null}
                            />
                            <span>€</span>
                        </div>
                    </div>

                    <input
                        type="range"
                        min={0}
                        max={2000}
                        value={min ?? 0}
                        onChange={(e) => setMin(Math.min(+e.target.value, (max ?? 2000) - MIN_GAP))}
                        className="range w-full mt-2"
                        disabled={max === null}
                    />
                    <input
                        type="range"
                        min={0}
                        max={2000}
                        value={max ?? 2000}
                        onChange={(e) => setMax(Math.max(+e.target.value, (min ?? 0) + MIN_GAP))}
                        className="range w-full"
                        disabled={min === null}
                    />
                </>
            )}
        </div>
    );
};
