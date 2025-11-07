export async function GET() {
    return Response.json({
        "accountAssociation": {
            "header": "eyJmaWQiOjkxNTIsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHgwMmVmNzkwRGQ3OTkzQTM1ZkQ4NDdDMDUzRURkQUU5NDBEMDU1NTk2In0",
            "payload": "eyJkb21haW4iOiJhcHAuZXhhbXBsZS5jb20ifQ",
            "signature": "MHgxMGQwZGU4ZGYwZDUwZTdmMGIxN2YxMTU2NDI1MjRmZTY0MTUyZGU4ZGU1MWU0MThiYjU4ZjVmZmQxYjRjNDBiNGVlZTRhNDcwNmVmNjhlMzQ0ZGQ5MDBkYmQyMmNlMmVlZGY5ZGQ0N2JlNWRmNzMwYzUxNjE4OWVjZDJjY2Y0MDFj"
        },
        "baseBuilder": {
            "ownerAddress": "0x..."
        },
        "miniapp": {
            "version": "1",
            "name": "Base Demo",
            "homeUrl": "https://base-app-demo-green.vercel.app/",
            "iconUrl": "https://base-app-demo-green.vercel.app/icono.png",
            "splashImageUrl": "https://base-app-demo-green.vercel.app/globo-1024.1024.png",
            "splashBackgroundColor": "#000000",
            "webhookUrl": "https://base-app-demo-green.vercel.app/api/webhook",
            "subtitle": "Easy to manage",
            "description": "Track and manage your cryptocurrency portfolio.",
            "primaryCategory": "finance",
            "tags": ["finance"],
            "heroImageUrl": "https://base-app-demo-green.vercel.app/pantallaVertical.png",
            "tagline": "Save instantly",
            "ogTitle": "Example Mini App",
            "ogDescription": "Easy to manage portfolio.",
            "ogImageUrl": "https://base-app-demo-green.vercel.app/pantallaHorizontal.png",
            "noindex": false,
        }
    });
}