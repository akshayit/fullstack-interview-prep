# HTML

## Concept Explanation

HTML gives structure and meaning to a page. Good HTML helps browsers, screen readers, search engines, tests, and developers understand the UI.

## Beginner Explanation

Think of HTML as the skeleton of Amazon checkout. The address form, payment form, buttons, headings, and error messages all need clear names and positions.

## Realistic Analogy

In a Zomato order tracking page, the restaurant name, delivery status, ETA, and help button should be meaningful elements, not random `div`s.

## Interview Answer

Semantic HTML means using tags based on meaning, such as `header`, `main`, `nav`, `form`, `button`, `label`, and `section`. It improves accessibility, SEO, maintainability, and testing.

## Production Example

```html
<main>
  <h1>Checkout</h1>
  <form aria-label="Delivery address">
    <label for="phone">Phone number</label>
    <input id="phone" name="phone" type="tel" autocomplete="tel" required />

    <label for="address">Delivery address</label>
    <textarea id="address" name="address" autocomplete="street-address"></textarea>

    <button type="submit">Place order</button>
  </form>
</main>
```

## Pitfalls

- Using clickable `div`s instead of `button`.
- Missing labels for form inputs.
- Putting multiple `h1` elements without a clear document outline.

## Debugging Tips

- Navigate using only the keyboard.
- Inspect the accessibility tree in browser devtools.
- Run automated checks, then manually test focus order.

## Follow-up Questions

1. Why is `button` better than `div onClick`?
2. What is the difference between `section` and `article`?
3. How does semantic HTML help testing?
4. How would you make Amazon checkout accessible?
5. How do you debug broken tab navigation?
6. How do you structure HTML for a dashboard layout?

## Best Practices

- Use native controls first.
- Pair every input with a label.
- Keep heading levels logical.
- Use `aria-*` only when native HTML is not enough.

## Performance Concerns

Cleaner HTML reduces JavaScript work because native browser behavior handles forms, buttons, keyboard navigation, and validation.

## Security Concerns

Never inject untrusted HTML directly. For user-generated content like LinkedIn posts, sanitize content before rendering.

