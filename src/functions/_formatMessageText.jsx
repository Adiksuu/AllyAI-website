export const _formatMessageText = (text) => {
    return (
        <ReactMarkdown 
            remarkPlugins={[remarkGfm]} 
            rehypePlugins={[rehypeRaw]}
            components={{
                // Zamiana * na ● oraz zmniejszenie czcionki
                ul: ({ node, ...props }) => (
                    <ul style={{ listStyleType: "none", paddingLeft: "1em" }} {...props} />
                ),
                li: ({ node, ...props }) => (
                    <li style={{ fontSize: "0.9em" }}>● {props.children}</li>
                ),
                code: ({ node, inline, className, children, ...props }) => (
                    <code style={{ backgroundColor: "#f5f5f5", padding: "2px 4px", borderRadius: "4px" }} {...props}>
                        {children}
                    </code>
                ),
                table: ({ node, ...props }) => (
                    <table style={{ borderCollapse: "collapse", width: "100%" }} {...props} />
                ),
                th: ({ node, ...props }) => (
                    <th style={{ border: "1px solid #ddd", padding: "8px", backgroundColor: "#f5f5f5" }} {...props} />
                ),
                td: ({ node, ...props }) => (
                    <td style={{ border: "1px solid #ddd", padding: "8px" }} {...props} />
                ),
            }}
        >
            {text}
        </ReactMarkdown>
    );
};