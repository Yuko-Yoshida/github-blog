import { shallowMount } from '@vue/test-utils'
import PostCard from '@/components/PostCard.vue'

describe('PostCard', () => {
  test('has posts', () => {
    const wrapper = shallowMount(PostCard, {
      propsData: {
        title: 'test',
        tags: [
          { name: 'test1', url: 'test1' },
          { name: 'test2', url: 'test2' }
        ],
        content: '*'.repeat(10),
        post: { url: 'test' }
      }
    })

    expect(wrapper.find('#displayContent').text().length).toBe(10)
    expect(wrapper.find('#tag-1').text()).toBe('test1')
    expect(wrapper.find('#tag-2').text()).toBe('test2')
  })

  test('has posts', () => {
    const wrapper = shallowMount(PostCard, {
      propsData: {
        title: 'test',
        tags: [
          { name: 'test1', url: 'test1' },
          { name: 'test2', url: 'test2' }
        ],
        content: '*'.repeat(50),
        post: { url: 'test' }
      }
    })

    expect(wrapper.find('#displayContent').text().length).toBe(43)
  })
})
