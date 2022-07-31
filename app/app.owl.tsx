import { press, scrollToEnd, takeScreenshot } from "react-native-owl"

describe("App", () => {
  it("takes a screenshot of the welcome screen", async () => {
    const screen = await takeScreenshot("welcome-screen")

    expect(screen).toMatchBaseline()
  })

  it("presses continue button", async () => {
    await press("next-screen-button")
    const screen = await takeScreenshot("demo-screen")

    expect(screen).toMatchBaseline()
  })

  it("presses list button", async () => {
    await press("demo-screen-button")
    const screen = await takeScreenshot("demo-list-screen")

    expect(screen).toMatchBaseline()
  })

  it("scrolls to the end of the screen", async () => {
    await scrollToEnd("demo-list")
    const screen = await takeScreenshot("demo-list-scrolled")

    expect(screen).toMatchBaseline()
  })
})
