### usePagination Hook

#### Overview

The `usePagination` hook is designed to assist in generating a range of page numbers for pagination components in React applications. It provides a convenient way to calculate and return an array of page numbers based on the total count of items, page size, current page, and optional sibling count.

#### Installation

To use this hook, make sure to import it into your React component:

```javascript
import { usePagination } from "./path/to/usePagination";
```

#### Usage

```javascript
const paginationProps = {
  totalCount: 100, // Total number of items to paginate
  pageSize: 10, // Number of items per page
  siblingCount: 1, // Number of sibling pages to show on each side of the current page
  currentPage: 1 // Current active page
};

const pageNumbers = usePagination(paginationProps);
```

#### Parameters

- **totalCount** (number): Total number of items that need to be paginated.

- **pageSize** (number): Number of items to display on each page.

- **siblingCount** (number, optional): Number of sibling pages to show on each side of the current page. Defaults to 1.

- **currentPage** (number): Current active page.
