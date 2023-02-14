import { fireEvent, render, screen } from '@testing-library/react';
import { Companies } from '@components/Companies';

describe('COMPANIES', () => {
  it('should checked checkbox-hdd and checkbox-ssd', () => {
    const { getByTestId } = render(<Companies storage={100} transfer={200} />);
    const hddCheckbox = getByTestId('checkbox-hdd') as HTMLInputElement;
    const ssdCheckbox = getByTestId('checkbox-ssd') as HTMLInputElement;

    expect(hddCheckbox.checked).toBe(true);
    fireEvent.click(hddCheckbox);
    expect(hddCheckbox.checked).toBe(true);

    expect(ssdCheckbox.checked).toBe(false);
    fireEvent.click(ssdCheckbox);
    expect(ssdCheckbox.checked).toBe(true);
    fireEvent.click(ssdCheckbox);
    expect(ssdCheckbox.checked).toBe(true);
    expect(hddCheckbox.checked).toBe(false);
  });
  it('should checked checkbox-multy and checkbox-single', () => {
    const { getByTestId } = render(<Companies storage={100} transfer={200} />);
    const hddCheckbox = getByTestId('checkbox-multy') as HTMLInputElement;
    const ssdCheckbox = getByTestId('checkbox-single') as HTMLInputElement;

    expect(hddCheckbox.checked).toBe(true);
    fireEvent.click(hddCheckbox);
    expect(hddCheckbox.checked).toBe(true);

    expect(ssdCheckbox.checked).toBe(false);
    fireEvent.click(ssdCheckbox);
    expect(ssdCheckbox.checked).toBe(true);
    fireEvent.click(ssdCheckbox);
    expect(ssdCheckbox.checked).toBe(true);
    expect(hddCheckbox.checked).toBe(false);
  });
});
