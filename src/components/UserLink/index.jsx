import { TextMedium } from "../../styles/Text"
import { Link } from "./style"

export const UserLink = ({ userAt }) => {
    return (
        <Link href={`https://twitter.com/${userAt}`} target="_blank" rel="noreferrer">
                <TextMedium>@{userAt}</TextMedium>
        </Link>
    )
}
