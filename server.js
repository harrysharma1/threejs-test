// import { serve } from "https://deno.land/std@0.114.0/http/server.ts";

// const server = serve({port:6969});
// console.log("Server running at https://localhost:6969/")

// for await (const req of server){
//     if (req.url=='/'){
//         const file = Deno.readFile("index.html");
//         req.respond({body:file});
//     }else{
//         req.respond({status:404, body:"Not Found"});
//     }
// }
Deno.serve(async _req => {
    const file = await Deno.open("./index.html");
    return new Response(file.readable, {
        headers: {
            "content-type" : "text/plain"
        }
    });
});
