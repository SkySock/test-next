import clsx from "clsx";
import ImageSlider from "../ImageSlider/ImageSlider";
import {motion} from "motion/react"
import layoutImg from "../../../public/layout.svg"
import Image from 'next/image';


interface Props {
  text: string;
  onClick?: () => void;
}



export default function ChoiceBlock({ text, onClick }: Props) {
  return (
    <motion.div
    whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={clsx(
        "flex flex-col bg-primary-gray w-128 h-130 rounded-b-[2vh] rounded-t-[2vh] align-center  cursor-pointer overflow-hidden",
        "bg-gradient-to-r from-primary/12 to-secondary/10 shadow-xl",
      )}
      onClick={onClick}
    >

      <ImageSlider images={["https://trizio.ru/img-srv01/052017/img_post/top_359.jpg", "https://cdn0.divan.ru/img/v1/SJPLnngj9bp7xhqhbMOZvbRk3UAy6H_JCV_wSc_n09w/rs:fit:1920:1440:0:0/g:ce:0:0/bg:ffffff/q:85/czM6Ly9kaXZhbi93aWtpLWFydGljbGUvNDY0MTk5NC5qcGc.jpg"]}/>
      {/* <Image src={layoutImg} /> */}
      <div></div>
      <span className="m-auto text-2xl ">{text}</span>
    </motion.div>
  );
}
