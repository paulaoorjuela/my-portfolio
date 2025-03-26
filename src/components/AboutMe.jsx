export default function AboutMe(){
    return(
        <div className="div7 yellow-background">
            <div className="flex justify-end">
                <animated-icons
                    src="https://animatedicons.co/get-icon?name=Fullscreen&style=minimalistic&token=defd54f5-3357-43dd-ad9e-32e227c0ac60"
                    trigger="loop-on-hover"
                    data-variationThumbColour="#000000"
                    data-variationName="Dark"
                    data-variationNumber="4"
                    data-numberOfGroups="2"
                    data-strokeWidth="1.5"
                    data-backgroundIsGroup="true"
                    data-defaultColours='{"group-1":"#E6E9EC", "group-2":"#000000", "background":"#000000"}'
                    height="50"
                    width="50"
                    className="cursor-pointer"
                ></animated-icons>
            </div>
            <p className="text-[35px] raleway-regular text-left mt-[55px] ms-[29px]">About <span className="shrikhand-regular underline">me</span></p>
            <img className="relative left-[183px] top-[23px]" src="/assets/flower.png" alt="" />
        </div>
    )
}