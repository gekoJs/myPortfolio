import { useSelector } from "react-redux";
import { hoverOnOffLogo } from "@/Redux/animateTrigger";
import { useDispatch } from "react-redux";

export default function MyLogo() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.animations.hoverButtonLogo);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 469 600"
      className="myLogo"
      onMouseEnter={() => dispatch(hoverOnOffLogo(true))}
      onMouseLeave={() => dispatch(hoverOnOffLogo(false))}
      style={{
        fill: state ? "#fff" : "#f00",
      }}
    >
      <title>JesusRoa</title>
      <g id="Capa_2" data-name="Capa 2">
        <g id="Capa_1-2" data-name="Capa 1">
          <path
            className="cls-1"
            d="M217,476.47l-38,21.94a12,12,0,0,1-12,0l-38-21.94a12,12,0,0,1-6-10.39V33.91a12,12,0,0,1,6-10.4l38-21.9a12,12,0,0,1,12,0l38,21.94A12,12,0,0,1,223,34V466.08A12,12,0,0,1,217,476.47Z"
          />
          <path
            className="cls-1"
            d="M82,398.37,6,354.49A12,12,0,0,1,0,344.1V55.84A12,12,0,0,1,6,45.45L82,1.62A12,12,0,0,1,100,12V388A12,12,0,0,1,82,398.37Z"
          />
          <path
            className="cls-1"
            d="M340,554.5l-76,43.87A12,12,0,0,1,246,588V12a12,12,0,0,1,18-10.4l76,43.86a12,12,0,0,1,6,10.4V544.11A12,12,0,0,1,340,554.5Z"
          />
          <path
            className="cls-1"
            d="M463,154.51l-76,43.86A12,12,0,0,1,369,188V12a12,12,0,0,1,18-10.4l76,43.89a12,12,0,0,1,6,10.39v88.2A12,12,0,0,1,463,154.51Z"
          />
        </g>
      </g>
    </svg>
  );
}
