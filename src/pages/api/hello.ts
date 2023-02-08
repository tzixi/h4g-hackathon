// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import AxePuppeteer from '@axe-core/puppeteer'
import puppeteer from 'puppeteer'

type Data = {
  name: string
}

async function returnResult(){
  
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("hello");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setBypassCSP(true);

  await page.goto('https://nus.com');

  const results = await new AxePuppeteer(page).analyze();
  console.log(results);

  await page.close();
  await browser.close();
  res.status(200).json({ name: 'John Doe' })
}
