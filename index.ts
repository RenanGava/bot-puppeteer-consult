import puppeteer from "puppeteer";
import { v4 as uuid } from 'uuid'

async function openBrowser() {
    const browser = await puppeteer.launch({
        headless: false,
        executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe"
    })


    const page = await browser.newPage()
    await page.setViewport({ width: 1880, height: 1250 })
    let i = 0
    while (i < 10) {

        await page.goto(`https://www.bing.com/`)
        // comando localiza um input e digita o valor nele
        await page.type('[name="q"]', uuid(), {
            delay: 10
        })


        // aperta uma tecla que for escolhida
        await page.keyboard.press("Enter", {
            delay: 20
        }
        )

        i++
    }


}

openBrowser()