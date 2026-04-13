import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { FaTimes, FaExternalLinkAlt, FaExpand } from 'react-icons/fa';
import '../css/LivePreview.css';

const LivePreview = ({ title, url }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = prev || '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, close]);

  const handleLoad = () => setIsLoading(false);

  const modal = isOpen
    ? ReactDOM.createPortal(
        <div className="lp-overlay" onClick={close}>
          <div className="lp-dialog" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="lp-header">
              <h3 className="lp-title">{title}</h3>
              <div className="lp-controls">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lp-ctrl-btn"
                  title="Open in new tab"
                >
                  <FaExternalLinkAlt />
                </a>
                <button className="lp-ctrl-btn lp-close-btn" onClick={close} title="Close">
                  <FaTimes />
                </button>
              </div>
            </div>

            {/* Iframe */}
            <div className="lp-body">
              {isLoading && <div className="lp-spinner" />}
              <iframe
                src={url}
                title={title}
                className={`lp-iframe ${isLoading ? 'loading' : 'loaded'}`}
                onLoad={handleLoad}
                sandbox="allow-scripts allow-same-origin allow-forms"
              />
            </div>

            {/* Footer */}
            <div className="lp-footer">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="lp-visit-btn"
              >
                Visit Live Site <FaExternalLinkAlt size={11} />
              </a>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;

  return (
    <>
      {/* Inline preview (small) */}
      <div className="lp-inline">
        <div className="lp-inline-header">
          <h3>{title}</h3>
          <button className="lp-expand-btn" onClick={open} title="Open fullscreen preview">
            <FaExpand />
          </button>
        </div>
        <div className="lp-inline-frame">
          <iframe
            src={url}
            title={title}
            sandbox="allow-scripts allow-same-origin allow-forms"
          />
        </div>
      </div>

      {modal}
    </>
  );
};

export default LivePreview;
