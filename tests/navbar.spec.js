import { test, expect } from '@playwright/test'

test.describe('Navbar functionality', () => {
  test.beforeEach(async ({ page }) => {
    // Start the dev server if not running
    try {
      await page.goto('http://localhost:5173', { timeout: 5000 })
    } catch (error) {
      console.log('Dev server not running, starting it now...')
      // This assumes the user can run shell commands.
      // In a real CI/CD environment, the server would be started as a separate step.
      const { exec } = require('child_process')
      exec('npm run dev')
      await page.waitForTimeout(10000) // Wait for server to start
      await page.goto('http://localhost:5173')
    }
  })

  test('should toggle navigation menu on mobile', async ({ page }) => {
    // Set viewport to a mobile size
    await page.setViewportSize({ width: 375, height: 667 })

    const navigation = page.locator('#navigation')
    await expect(navigation).not.toBeVisible()

    // Click the navbar toggler
    await page.locator('.navbar-toggler').click()

    // Assert that the navigation menu is visible
    await expect(navigation).toBeVisible()

    // Click the navbar toggler again
    await page.locator('.navbar-toggler').click()

    // Assert that the navigation menu is hidden
    await expect(navigation).not.toBeVisible()
  })

  test('should navigate to about page on link click', async ({ page }) => {
    // Set viewport to a desktop size
    await page.setViewportSize({ width: 1280, height: 720 })

    // Click the "회사소개" dropdown
    await page.locator('a.nav-link.dropdown-toggle:has-text("회사소개")').click()

    // Click the "회사연혁" link
    await page.locator('a.dropdown-item[href="/about/history"]').click()

    // Assert that the URL is correct
    await expect(page).toHaveURL(/.*about\/history/)
  })
})
