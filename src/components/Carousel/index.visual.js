describe('Carousel', () => {
  it('looks correct', async () => {
    await page.goto('http://localhost:9001/iframe.html?id=components-carousel--carousel')

    const image = await page.screenshot({ fullPage: true })

    expect(image).toMatchImageSnapshot()
  })
})
