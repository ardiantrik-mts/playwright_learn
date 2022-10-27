import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://www.google.com/');

  await page.getByRole('combobox', { name: 'Cari' }).click();

  await page.getByRole('combobox', { name: 'Cari' }).fill('cari sesuatu');

  await page.getByRole('combobox', { name: 'Cari' }).press('Enter');
  await expect(page).toHaveURL('https://www.google.com/search?q=cari+sesuatu&source=hp&ei=QOtYY8ubH7rhseMP1JaBiAE&iflsig=AJiK0e8AAAAAY1j5UDlku5eMEIEECRdk7PYEJMbCIMgY&ved=0ahUKEwjLu6TduP36AhW6cGwGHVRLABEQ4dUDCAc&uact=5&oq=cari+sesuatu&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgYIABAWEB4yCAgAEBYQHhAPMggIABAWEB4QCjIICAAQFhAeEAoyCAgAEBYQHhAPMgoIABAWEB4QDxAKMggIABAWEB4QDzIICAAQFhAeEA8yCAgAEBYQHhAPOgsIABCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQ0QM6CwguEIAEELEDEIMBOggILhCxAxCDAToICAAQgAQQsQM6CggAELEDEIMBEAo6CAgAELEDEIMBOggILhCABBCxAzoICC4QsQMQ1AI6BwgAEIAEEApQqQlY_hdg5FZoAXAAeACAAY0BiAGECpIBAzUuN5gBAKABAbABAA&sclient=gws-wiz');

});