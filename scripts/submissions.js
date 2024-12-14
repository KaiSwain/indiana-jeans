export const submissionList = async () => {
    // Get the submissions from your API
    const response = await fetch("http://localhost:8088/submissions")
    const submissions = await response.json()
    // Iterate the submissions and create some <section> representations
    let html = ""
    for (const submission of submissions) {
       html += `<section class="submissions">
       <div>Owns jeans?  ${submission.ownsBlueJeans}</div>
       <div>Area Type?  ${submission.socioLocationId}</div>
       </section>`
    }

    // Return the HTML string
    return html
}