## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on GCP

https://awtgltd.atlassian.net/wiki/spaces/CA/pages/3012198401/Deployment+process

BASE_URL - API URL

## Packages and libs

For icons - react-icons (example: BsArrowRightCircle, BsChevronDown, ...)

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

For integration via iframe is used external script hosted within next.js app:
`{process.env.NEXT_PUBLIC_BASE_URL_WEB}/js/embed-script.js`

That's why if developers changes applied only inside script-don't need any changes on a customer side.

