import { ownJeansChoices } from "./OwnsJeans.js"
import { saveSubmission } from "./SaveSubmission.js"
import { submissionList } from "./submissions.js"
import { locationTypeChoices } from "./WhereAreYou.js"

const containerElement = document.querySelector("#container")

 const render = async () => {
    const jeanOwnershipHTML = ownJeansChoices()
    const locationsHTML = await locationTypeChoices()
    const buttonHTML = await saveSubmission()
    const SubmissionHTML = await submissionList()
    containerElement.innerHTML = 
    `${jeanOwnershipHTML} 
    ${locationsHTML}
    ${buttonHTML}
    ${SubmissionHTML}
    `
 }

document.addEventListener("newSubmissionCreated", render)

 render()