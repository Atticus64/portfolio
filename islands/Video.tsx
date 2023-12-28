import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import { createRef } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

/**
 * @param {string} video uri of the video
 * @param {string} name unique name of the video
 */
interface Props {
	video: string
	name: string
}

export const VideoSection = ({ video, name }: Props) => {
	const videoRef = createRef()

	if (!IS_BROWSER) return <div></div>;

	const handlePlayVideo = () => videoRef.current.play()

	const progress = useSignal(0)

	const handleSeekbarClick = (e: MouseEvent & { currentTarget: HTMLDivElement, target: Element }) => {
		const seekbar = document.getElementById(`custom-seekbar-${name}`);

		if (!seekbar) {
			return
		}

		const offset = seekbar.getBoundingClientRect().left;
		const left = e.pageX - offset;
		const totalWidth = seekbar.clientWidth;
		const clickedPercentage = (left / totalWidth);

		const vidTime = videoRef.current.duration * clickedPercentage;
		videoRef.current.currentTime = vidTime;

	};

	useEffect(() => {
		const vid = videoRef.current;

		if (vid) {
			vid.addEventListener('timeupdate', handleProgress);
			return () => vid.removeEventListener('timeupdate', handleProgress);
		}
	}, []);

	const handleProgress = (e: Event & { currentTarget: HTMLVideoElement, target: Element }) => {

		if (!e.target) {
			return
		}

		const target = e.currentTarget as HTMLVideoElement;

		if (!e.target)
			return;

		if (isNaN(target.duration))
			return;


		progress.value = ((target.currentTime / target.duration) * 100);
	};



	return (
		<div>

			<video onClick={handlePlayVideo} ref={videoRef} id={`custom-video-${name}`} onTimeUpdate={handleProgress} autoplay loop >
				<source src={video} type="video/webm" />
			</video>

			<div onClick={handleSeekbarClick} id={`custom-seekbar-${name}`} class={` h-2
 						cursor-pointer w-full bg-gray-200 rounded-b mb-4 dark:bg-gray-700`}>
				<div style={{ width: `${progress.value}%` }} class="bg-green-600 h-2.5 rounded-b dark:bg-green-500"></div>
			</div>


		</div>
	)
}
