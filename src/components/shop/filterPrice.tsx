    "use client";
    import {usePriceFilter} from "@/features/shop/shop.hook";

    export const FilterPrice = () => {
        const {
            min,
            max,
            enabled,
            handleMinChange,
            handleMaxChange,
            toggleEnabled,
        } = usePriceFilter();

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
                                    onChange={(e) => handleMinChange(+e.target.value)}
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
                                    onChange={(e) => handleMaxChange(+e.target.value)}
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
                            onChange={(e) => handleMinChange(+e.target.value)}
                            className="range w-full mt-2"
                            disabled={max === null}
                        />
                        <input
                            type="range"
                            min={0}
                            max={2000}
                            value={max ?? 2000}
                            onChange={(e) => handleMaxChange(+e.target.value)}
                            className="range w-full"
                            disabled={min === null}
                        />
                    </>
                )}
            </div>
        );
    };
