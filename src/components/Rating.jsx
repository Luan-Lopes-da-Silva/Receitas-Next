import Image from "next/image";
import img from '@/src/assets/svg/star_FILL0_wght400_GRAD0_opsz48 (1).svg'

export default function Rating(){
return(
  <div>
    <Image
    src={img}
    width={50}
    height={50}
    alt="Rating"
    />
     <Image
    src={img}
    width={50}
    height={50}
    alt="Rating"
    />
     <Image
    src={img}
    width={50}
    height={50}
    alt="Rating"
    />
     <Image
    src={img}
    width={50}
    height={50}
    alt="Rating"
    />
     <Image
    src={img}
    width={50}
    height={50}
    alt="Rating"
    />
  </div>
)  
}