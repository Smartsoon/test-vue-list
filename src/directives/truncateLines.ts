import type { DirectiveBinding } from 'vue'

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const maxLines = parseInt(binding.value as string)
    if (isNaN(maxLines) || maxLines <= 0) {
      return
    }

    const lineHeight = parseInt(getComputedStyle(el).lineHeight || '0')
    el.style.overflow = 'hidden'
    el.style.textOverflow = 'ellipsis'
    el.style.webkitBoxOrient = 'vertical'
    el.style.display = '-webkit-box'
    el.style.webkitLineClamp = String(maxLines)
    el.style.maxHeight = `${maxLines * lineHeight}px`
  },
  name: 'truncate-lines'
}
