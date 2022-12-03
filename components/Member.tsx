import Image from "next/image";
import { MemeberWrap } from "../styles/MemberWrap";
import Avatar from "../public/img/avatar2.png"

    type memberProps = {
        name: string,
        status: string,
        avatar: string
    }
const Member = ({name,status,avatar}:memberProps) => {
    return (
        <MemeberWrap>
            <div className="memberImgContainer">
                <div className="memberImg">
                    <Image src={Avatar} alt="avatar" layout="fill"/>
                </div>
            </div>

            <h2 className="memberName"> {name}</h2>
            <p className="memberStatus">{status}</p>
        </MemeberWrap>
    )
}

export default Member;