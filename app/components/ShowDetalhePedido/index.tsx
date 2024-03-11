import { motion } from "framer-motion";
import Modal from "../Modal/Modal";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";

export const ShowDetalhePedido = () => {
  return (
    <Modal isopen={true}>
      <motion.div
        initial={{ bottom: "-100px" }}
        animate={{ bottom: "0px" }}
        // transition={{ duration: 0.1 }}
        className="bg-[#fff] w-full absolute bottom-0 left-0 rounded-ss-[20px] rounded-se-[20px] p-[20px]"
      >
        <IoMdClose className="absolute right-3 top-3" />
        <div>
          <Image
            width={20}
            height={20}
            src="/image 12.png"
            alt="produto"
          ></Image>
        </div>
      </motion.div>
    </Modal>
  );
};
