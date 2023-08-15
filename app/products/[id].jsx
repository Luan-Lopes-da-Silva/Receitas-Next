import { items,items2,items3,orders} from "@/db"
import { useRouter } from "next/router"

export default function Page(){
const router = useRouter()
console.log(router.query.id)
}