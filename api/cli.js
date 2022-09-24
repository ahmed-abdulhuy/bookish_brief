const { Octokit } = require('octokit')
const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
});

async function run() {
    const {data: user} = await octokit.request('GET /user')
    
    console.log(`authenticated as ${user.login}`)

    const { data:readme } = await octokit.request(
        'GET /repos/{owner}/{repo}/contents/{path}',
        {
            owner: 'ahmed-abdulhuy',
            repo: 'bookish_brief',
            path: 'README.md',

        }
    )

    const content = Buffer.from(readme.content, 'base64').toString();
    // console.log(content)
    const update = content + '\n\n\n =============================\nHello World bu octokit';

    const response = await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}/{ref}', {
        owner: 'ahmed-abdulhuy',
        repo: 'bookish_brief',
        ref: 'dev',
        path: 'README.md',
        message: 'poob',
        content: Buffer.from(update, 'utf8').toString('base64'),
        sha: readme.sha,
    })

    console.log(response.data)
}

run();