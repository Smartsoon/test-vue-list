import { expect, describe, it } from 'vitest';
import { mount } from '@vue/test-utils'
import type { ValuesList } from '@/ui/types/valueList'
import ValueList from '@/ui/ValueList.vue'

describe('ValueList.vue', () => {
  const values: ValuesList[] = [
    { index: 1, label: 'Label 1', value: 'Value 1' },
    { index: 2, label: 'Label 2', value: 'Value 2' },
  ];

  it('renders each value correctly', () => {
    const wrapper = mount(ValueList, {
      props: { values },
    });

    const items = wrapper.findAll('.value-list__item');
    expect(items.length).toBe(values.length);

    items.forEach((item, index) => {
      const label = item.element.querySelector('h3');
      const value = item.element.querySelector('p');
      expect(label?.textContent).toBe(values[index].label + ':');
      expect(value?.textContent).toBe(values[index].value);
    });
  });

  it('renders no items if no values provided', () => {
    const wrapper = mount(ValueList, {
      props: { values: [] },
    });

    const items = wrapper.findAll('.value-list__item');
    expect(items.length).toBe(0);
  });

  it('renders no items if values prop is undefined', () => {
    const wrapper = mount(ValueList);

    const items = wrapper.findAll('.value-list__item');
    expect(items.length).toBe(0);
  });
});