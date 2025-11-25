import React from 'react';
import Card from './Card';
import Search from './Search';

const CardList = ({ data = [] }) => {
  const [page, setPage] = React.useState(1);
  const [perPage] = React.useState(12);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [pages, setPages] = React.useState(1);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setPage(1);
  }

  const tagString = (product) => {
    if (!product) return '';
    if (Array.isArray(product.tags)) {
      return product.tags.map(t => (typeof t === 'string' ? t : (t.title || t.source?.title || ''))).join(' ').toLowerCase();
    }
    return '';
  }

  const filtered = React.useMemo(() => {
    return data.filter(p => {
      if (!searchTerm) return true;
      const tags = tagString(p);
      const title = (p.description ?? p.alt_description ?? '').toLowerCase();
      return tags.includes(searchTerm) || title.includes(searchTerm);
    });
  }, [data, searchTerm]);

  React.useEffect(() => {
    const calc = Math.max(1, Math.ceil(filtered.length / perPage));
    setPages(calc);
    if (page > calc) setPage(calc);
  }, [filtered, perPage]);

  const start = (page - 1) * perPage;
  const pageItems = filtered.slice(start, start + perPage);

  const pageButtons = [];
  for (let i = 1; i <= pages; i++) {
    pageButtons.push(
      <button
        key={i}
        onClick={() => setPage(i)}
        className={`pa2 mr1 ${i === page ? 'b bg-black white' : 'link'}`}
        aria-current={i === page ? 'page' : undefined}
      >
        {i}
      </button>
    )
  }

  return (
    <section>
      <Search handleSearch={handleSearch} />

      <div className="cf">
        {pageItems.length === 0 && (
          <p className="f6 black-60">No products found.</p>
        )}
        {pageItems.map(item => (
          <Card key={item.id} {...item} />
        ))}
      </div>

      <div className="mv4 flex items-center">
        <button className="pa2 mr2" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>Prev</button>
        <div className="mr3">{pageButtons}</div>
        <div className="f6 gray ml3">Page {page} of {pages}</div>
        <button className="pa2 ml2" onClick={() => setPage(p => Math.min(pages, p + 1))} disabled={page === pages}>Next</button>
      </div>
    </section>
  )
}

export default CardList;