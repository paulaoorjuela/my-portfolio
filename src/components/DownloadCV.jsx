export default function DownloadCV(){
    return(
        <div className="div9 light-gray-background flex justify-start items-end">
            <div className="flex pb-2">
            <p className="raleway-regular white-text text-[30px] text-left mx-[29px]">Download CV</p>
            <animated-icons
                src="https://animatedicons.co/get-icon?name=download&style=minimalistic&token=c041d11b-9e1b-4f4b-b4fe-782ea93cace6"
                trigger="loop-on-hover"
                data-variationThumbColour="#000000"
                data-variationName="Dark"
                data-variationNumber="4"
                data-numberOfGroups="2"
                data-strokeWidth="1.5"
                data-backgroundIsGroup="true"
                data-defaultColours='{"group-1":"#E6E9EC","group-2":"#000000","background":"#000000"}'
                height="50"
                width="50"
                className="cursor-pointer"
            ></animated-icons>
            </div>
        </div>
    )
}