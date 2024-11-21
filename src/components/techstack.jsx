import * as icons from 'simple-icons';

export default function TechStack() {
    const mdRows = {
        1: [],
        2: ["Javascript", "React", "Nodedotjs", "Html5", "Css3", "Redux", "Nextdotjs", "Jquery"],
        3: ["Tailwindcss", "Bootstrap", "Vite", "Mongodb", "Express", "Github", "Git"],
        4: ["Firebase", "Graphql", "Php", "Laravel"],
        5: []
    };

    const smRows = {
        1: ["Javascript", "React"],
        2: ["Nodedotjs", "Html5"],
        3: ["Css3", "Redux"],
        4: ["Nextdotjs", "Jquery"],
        5: ["Tailwindcss", "Bootstrap"],
        6: ["Vite", "Mongodb"],
        7: ["Express", "Github"],
        8: ["Git", "Firebase"],
        9: ["Graphql", "Php"],
        10: ["Laravel"],
    };

    const addStylesToSvg = (svg, fillColor, shadowColor) => {
        const svgWithFill = svg.replace(/<path([^>]*)>/g, `<path$1 fill="#${fillColor}" />`);
        const svgWithShadow = svgWithFill.replace(
            /<svg([^>]*)>/,
            `<svg$1 style="filter: drop-shadow(0 0 0.8rem color-mix(in srgb, #${shadowColor} 70%, transparent));">`
        );
        return svgWithShadow;
    };

    return (
        <div>
            <h1 className="font-teko uppercase font-[700] text-5xl md:text-9xl text-center py-28">We unleash the results with cutting edge tech stack</h1>
            <div className="relative hidden md:grid md:grid-cols-12 overflow-hidden gap-1 md:gap-6 py-12">
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white pointer-events-none opacity-40"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none opacity-40"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-white via-transparent to-white pointer-events-none opacity-40"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white pointer-events-none opacity-40"></div>
                {Object.entries(mdRows).map(([rowIndex, iconNames], rowIdx) => {
                    // Calculate empty columns for centering icons
                    const iconCount = iconNames.length;
                    const emptyCols = (12 - iconCount) / 2;

                    return (
                        <div key={rowIndex} className="col-span-12 flex flex-row justify-center items-center">

                            {Array.from({ length: Math.floor(emptyCols) }).map((_, index) => (
                                <div key={`spacer-left-${rowIdx}-${index}`} className="col-span-6 w-40 h-24 border border-gray-300 bg-gray-200 rounded-lg p-5 mx-3"></div>
                            ))}

                            {iconNames.map((iconName, index) => {
                                const completeIconName = `si${iconName}`;
                                const icon = icons[completeIconName];
                                if (!icon) return null;

                                const shadowColor = `#${icon.hex}`;
                                const handleMouseEnter = (e) => e.currentTarget.style.setProperty("box-shadow", `0 0 30px ${shadowColor}`);
                                const handleMouseLeave = (e) => e.currentTarget.style.setProperty("box-shadow", "none")
                                const styledSvg = addStylesToSvg(icon.svg, icon.hex, icon.hex);
                                return (
                                    <div
                                        key={`icon-${rowIdx}-${index}`}
                                        className={`col-span-6 w-40 h-24 transition-all border border-gray-300 duration-500 bg-gray-200 hover:shadow-2xl rounded-lg p-5 mx-3`}
                                        dangerouslySetInnerHTML={{ __html: styledSvg }}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    />
                                );
                            })}

                            {Array.from({ length: Math.ceil(emptyCols) }).map((_, index) => (
                                <div key={`spacer-right-${rowIdx}-${index}`} className="col-span-6 w-40 h-24 border border-gray-300 bg-gray-200 rounded-lg p-5 mx-3"></div>
                            ))}
                        </div>
                    );
                })}
            </div>

            <div className="relative md:hidden grid grid-cols-3 overflow-hidden gap-1 py-12">
                {/* White Vignette Effect */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white pointer-events-none opacity-40"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none opacity-40"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-white via-transparent to-white pointer-events-none opacity-40"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white pointer-events-none opacity-40"></div> */}
                {Object.entries(smRows).map(([rowIndex, iconNames], rowIdx) => {
                    const iconCount = iconNames.length;
                    const emptyCols = (1 - iconCount) / 1;

                    return (
                        <div key={rowIndex} className="">

                            {Array.from({ length: Math.floor(emptyCols) }).map((_, index) => (
                                <div key={`spacer-left-${rowIdx}-${index}`} className="size-24 border border-gray-300 bg-gray-200 rounded-lg mx-3"></div>
                            ))}

                            {iconNames.map((iconName, index) => {
                                const completeIconName = `si${iconName}`;
                                const icon = icons[completeIconName];
                                if (!icon) return null;

                                const shadowColor = `#${icon.hex}`;
                                const handleMouseEnter = (e) => e.currentTarget.style.setProperty("box-shadow", `0 0 30px ${shadowColor}`);
                                const handleMouseLeave = (e) => e.currentTarget.style.setProperty("box-shadow", "none")
                                const styledSvg = addStylesToSvg(icon.svg, icon.hex, icon.hex);
                                return (
                                    <div
                                        key={`icon-${rowIdx}-${index}`}
                                        className={`size-24 transition-all border border-gray-300 duration-500 bg-gray-200 hover:shadow-2xl rounded-lg mx-3`}
                                        dangerouslySetInnerHTML={{ __html: styledSvg }}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    />
                                );
                            })}

                            {Array.from({ length: Math.ceil(emptyCols) }).map((_, index) => (
                                <div key={`spacer-right-${rowIdx}-${index}`} className="size-24 border border-gray-300 bg-gray-200 rounded-lg mx-3"></div>
                            ))}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}