export default function Spotify(){
    return(
    <div className="div6 gray-background">
        <p className="spotify-green-text raleway-regular mt-1.5">Recently played on <i className="fa-brands fa-spotify text-[20px] ms-1.5"></i></p>
        <div className="spotify p-5">
        <img
          src="https://spotify-github-profile.kittinanx.com/api/view?uid=paulaoorjuela&cover_image=true&theme=novatorem&show_offline=false&background_color=121212&interchange=true&bar_color=53b14f&bar_color_cover=false"
          alt="Spotify Playing Now"
          className="spotify-widget"
        />
        </div>
    </div>
    )
}