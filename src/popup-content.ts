type PopupSpot = { name: string; region: string; type: string; species: string[]; coordinateStatus?: 'exact-named-feature' | 'approximate-centroid' };
type ElementLike = { className: string; textContent: string | null; style: Record<string, string>; append: (...nodes: ElementLike[]) => void };
type DocumentLike = { createElement: (tag: string) => ElementLike };

function node(documentLike: DocumentLike, tag: string, className: string, text?: string) {
  const element = documentLike.createElement(tag);
  element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

/** Builds a real DOM tree so research/catalog strings never enter an HTML parser. */
export function buildSpotPopup(documentLike: DocumentLike, spot: PopupSpot) {
  const card = node(documentLike, 'div', 'popup-card');
  const header = node(documentLike, 'div', 'popup-header');
  const title = node(documentLike, 'strong', '', spot.name);
  header.append(title);
  card.append(
    header,
    node(documentLike, 'div', 'popup-meta', `${spot.region} · ${spot.type}`),
    node(documentLike, 'div', 'popup-window', spot.coordinateStatus === 'approximate-centroid' ? 'Approximate map location · Open spot details' : 'Open spot details')
  );
  const species = node(documentLike, 'div', 'popup-species');
  for (const label of spot.species.slice(0, 4)) species.append(node(documentLike, 'span', 'popup-tag', label));
  card.append(species);
  return card;
}
