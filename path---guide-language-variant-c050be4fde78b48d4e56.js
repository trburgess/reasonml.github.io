webpackJsonp([21],{"./node_modules/json-loader/index.js!./.cache/json/guide-language-variant.json":function(e,a){e.exports={data:{allFile:{edges:[{node:{relativePath:"guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Examples",order:60}}}},{node:{relativePath:"guide/index.md",childMarkdownRemark:{frontmatter:{title:"The Reason Guide",order:0}}}},{node:{relativePath:"guide/what-and-why.md",childMarkdownRemark:{frontmatter:{title:"What & Why",order:0}}}},{node:{relativePath:"guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:50}}}},{node:{relativePath:"guide/editor-tools/editors-plugins.md",childMarkdownRemark:{frontmatter:{title:"Editors Plugins",order:20}}}},{node:{relativePath:"guide/editor-tools/index.md",childMarkdownRemark:{frontmatter:{title:"Editor Setup",order:10}}}},{node:{relativePath:"guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Converting from JS",order:5}}}},{node:{relativePath:"guide/editor-tools/extra-goodies.md",childMarkdownRemark:{frontmatter:{title:"Extra Goodies",order:30}}}},{node:{relativePath:"guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:30}}}},{node:{relativePath:"guide/editor-tools/global-installation.md",childMarkdownRemark:{frontmatter:{title:"Global Installation",order:10}}}},{node:{relativePath:"guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Interop",order:1}}}},{node:{relativePath:"guide/language/boolean.md",childMarkdownRemark:{frontmatter:{title:"Boolean",order:30}}}},{node:{relativePath:"guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Libraries",order:2}}}},{node:{relativePath:"guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/javascript/syntax-cheatsheet.md",childMarkdownRemark:{frontmatter:{title:"Syntax Cheatsheet",order:1}}}},{node:{relativePath:"guide/language/destructuring.md",childMarkdownRemark:{frontmatter:{title:"Destructuring",order:130}}}},{node:{relativePath:"guide/language/exception.md",childMarkdownRemark:{frontmatter:{title:"Exception",order:175}}}},{node:{relativePath:"guide/language/external.md",childMarkdownRemark:{frontmatter:{title:"External",order:170}}}},{node:{relativePath:"guide/language/function.md",childMarkdownRemark:{frontmatter:{title:"Function",order:100}}}},{node:{relativePath:"guide/language/integer-and-float.md",childMarkdownRemark:{frontmatter:{title:"Integer & Float",order:40}}}},{node:{relativePath:"guide/language/if-else.md",childMarkdownRemark:{frontmatter:{title:"If-Else",order:110}}}},{node:{relativePath:"guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:160}}}},{node:{relativePath:"guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Language basics",order:20}}}},{node:{relativePath:"guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Imperative Loops",order:150}}}},{node:{relativePath:"guide/language/module.md",childMarkdownRemark:{frontmatter:{title:"Module",order:180}}}},{node:{relativePath:"guide/language/let-binding.md",childMarkdownRemark:{frontmatter:{title:"Let Binding",order:10}}}},{node:{relativePath:"guide/language/list-and-array.md",childMarkdownRemark:{frontmatter:{title:"List & Array",order:80}}}},{node:{relativePath:"guide/language/more-on-type.md",childMarkdownRemark:{frontmatter:{title:"More on Type",order:120}}}},{node:{relativePath:"guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Mutation",order:140}}}},{node:{relativePath:"guide/language/object.md",childMarkdownRemark:{frontmatter:{title:"Object",order:175}}}},{node:{relativePath:"guide/language/overview.md",childMarkdownRemark:{frontmatter:{title:"Overview",order:0}}}},{node:{relativePath:"guide/language/pattern-matching.md",childMarkdownRemark:{frontmatter:{title:"Pattern Matching!",order:135}}}},{node:{relativePath:"guide/language/record.md",childMarkdownRemark:{frontmatter:{title:"Record",order:60}}}},{node:{relativePath:"guide/language/tuple.md",childMarkdownRemark:{frontmatter:{title:"Tuple",order:50}}}},{node:{relativePath:"guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}},{node:{relativePath:"guide/language/string-and-char.md",childMarkdownRemark:{frontmatter:{title:"String & Char",order:20}}}},{node:{relativePath:"guide/language/type.md",childMarkdownRemark:{frontmatter:{title:"Type!",order:15}}}},{node:{relativePath:"guide/language/variant.md",childMarkdownRemark:{frontmatter:{title:"Variant!",order:70}}}},{node:{relativePath:"guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:40}}}},{node:{relativePath:"guide/meta/index.md",childMarkdownRemark:{frontmatter:{title:"Meta",order:1e3}}}},{node:{relativePath:"guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/meta/project-structure.md",childMarkdownRemark:{frontmatter:{title:"Project Structure",order:0}}}}]},file:{relativePath:"guide/language/variant.md",childMarkdownRemark:{html:'<p>Behold, the crown jewel of Reason data structures!</p>\n<p>Most data structures in most languages are about "this <strong>and</strong> that". A variant allows us to express "this <strong>or</strong> that".</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> myResponseVariant =\n  | <span class="hljs-type">Yes</span>\n  | <span class="hljs-type">No</span>\n  | <span class="hljs-type">PrettyMuch</span>;\n\n<span class="hljs-keyword">let</span> areYouCrushingIt = <span class="hljs-type">Yes</span>;</code></pre>\n      </div>\n<p><code>Yes</code>, <code>No</code> and <code>PrettyMuch</code> aren\'t strings, nor references, nor some special data type. They\'re called "constructors" (or "tag"). The <code>|</code> bar separates each constructor.</p>\n<p><strong>Note</strong>: a variant\'s constructors need to be capitalized.</p>\n<h3 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h3>\n<p>Along with a variant comes one of the most important features of Reason, the <code>switch</code> expression.</p>\n<p>A Reason <code>switch</code> is visually similar to other languages\' <code>switch</code> (aka a large <code>if/elseif/elseif...</code>). It allows you to check every possible case of a variant. To use it, enumerate every variant constructor of the particular variant you\'d like to use, each followed by an <code>=></code> and the expression corresponding to that case.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> message =\n  <span class="hljs-keyword">switch</span> areYouCrushingIt {\n  | <span class="hljs-type">No</span> =&gt; <span class="hljs-string">"No worries. Keep going!"</span>\n  | <span class="hljs-type">Yes</span> =&gt; <span class="hljs-string">"Great!"</span>\n  | <span class="hljs-type">PrettyMuch</span> =&gt; <span class="hljs-string">"Nice!"</span>\n  };\n<span class="hljs-comment">/* message is "Great!" */</span></code></pre>\n      </div>\n<p>A variant has an extremely rich amount of type system assistance. For example, we\'ll give you a type error if you\'ve forgotten to cover a case of your variant, or if two cases are redundant. Be sure to check out switch and pattern-matching in a <a href="/guide/language/pattern-matching">later section</a>!</p>\n<h4 id="variant-needs-an-explicit-definition"><a href="#variant-needs-an-explicit-definition" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Variant Needs an Explicit Definition</h4>\n<p>If the variant you\'re using is in a different file, bring it into scope like you\'d do <a href="/guide/language/record#record-needs-an-explicit-definition">for a record</a>:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-comment">/* Zoo.re */</span>\n\n<span class="hljs-keyword">type</span> animal = <span class="hljs-type">Dog</span> | <span class="hljs-type">Cat</span> | <span class="hljs-type">Bird</span>;</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-comment">/* example.re */</span>\n\n<span class="hljs-keyword">let</span> pet: <span class="hljs-type">Zoo</span>.animal = <span class="hljs-type">Dog</span>; <span class="hljs-comment">/* preferred */</span>\n<span class="hljs-comment">/* or */</span>\n<span class="hljs-keyword">let</span> pet = <span class="hljs-type">Zoo</span>.<span class="hljs-type">Dog</span>;</code></pre>\n      </div>\n<h4 id="constructor-arguments"><a href="#constructor-arguments" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Constructor Arguments</h4>\n<p>A variant\'s constructors can hold extra data separated by comma.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> account =\n  | <span class="hljs-type">None</span>\n  | <span class="hljs-type">Instagram</span>(string)\n  | <span class="hljs-type">Facebook</span>(string, int);</code></pre>\n      </div>\n<p>Here, <code>Instagram</code> holds a <code>string</code>, and <code>Facebook</code> holds a <code>string</code> and an <code>int</code>. Usage:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> myAccount = <span class="hljs-type">Facebook</span>(<span class="hljs-string">"Josh"</span>, <span class="hljs-number">26</span>);\n<span class="hljs-keyword">let</span> friendAccount = <span class="hljs-type">Instagram</span>(<span class="hljs-string">"Jenny"</span>);</code></pre>\n      </div>\n<p><strong>Notice how using a constructor is like calling a function</strong>? It\'s as if <code>Facebook</code> was a function that accepts two arguments. This isn\'t a coincidence; there\'s a reason why a constructor\'s data is called "constructor argument".</p>\n<p>Using <code>switch</code>, you can pattern-match (again, described in a later section) a constructor\'s arguments:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> greeting =\n  <span class="hljs-keyword">switch</span> myAccount {\n  | <span class="hljs-type">None</span> =&gt; <span class="hljs-string">"Hi!"</span>\n  | <span class="hljs-type">Facebook</span>(name, age) =&gt; <span class="hljs-string">"Hi "</span> ++ name ++ <span class="hljs-string">", you\'re "</span> ++ string_of_int(age) ++ <span class="hljs-string">"-year-old."</span>\n  | <span class="hljs-type">Instagram</span>(name) =&gt; <span class="hljs-string">"Hello "</span> ++ name ++ <span class="hljs-string">"!"</span>\n  };</code></pre>\n      </div>\n<h4 id="honorable-mentions"><a href="#honorable-mentions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Honorable Mentions</h4>\n<p>The <a href="/api/index.html">standard library</a> exposes two important variants you\'ll come to hear a lot.</p>\n<h5 id="option"><a href="#option" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>option</code></h5>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> option(\'a) = <span class="hljs-type">None</span> | <span class="hljs-type">Some</span>(\'a);</code></pre>\n      </div>\n<p>This is the convention used to simulate a "nullable" (aka <code>undefined</code> or <code>null</code>) value in other languages. Thanks to this convenience type definition, Reason can default every value to be non-nullable. An <code>int</code> will always be an int, never "<code>int</code> <strong>or</strong> <code>null</code> <strong>or</strong> <code>undefined</code>". If you do want to express a "nullable int", you\'d use <code>option(int)</code>, whose possible values are <code>None</code> or <code>Some(int)</code>. <code>switch</code> forces you to handle both cases; therefore, <strong>a pure Reason program doesn\'t have null errors</strong>.</p>\n<h5 id="list"><a href="#list" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>list</code></h5>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> list(\'a) = <span class="hljs-type">Empty</span> | <span class="hljs-type">Head</span>(\'a, list(\'a));</code></pre>\n      </div>\n<p><em>Not the actual type definition. Just an illustration</em>.</p>\n<p>This says: "a list that holds a value of type <code>a</code> (whatever it is) is either empty, or holds that value plus another list".</p>\n<p>Reason gave <code>list</code> a syntax sugar. <code>[1, 2, 3]</code> is conceptually equivalent to <code>Head(1, Head(2, Head(3, Empty)))</code>. Once again, <code>switch</code> forces you to handle every case of this variant, including <code>Empty</code> (aka <code>[]</code>). <strong>This eliminates another big category of access bugs</strong>.</p>\n<h5 id="other-variant-like-types"><a href="#other-variant-like-types" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Other Variant-like Types</h5>\n<p>Did you know that you can use <code>switch</code> on string, int, float, array, and most other data structures? Try it!</p>\n<!-- TODO playground link -->\n<h3 id="tips--tricks"><a href="#tips--tricks" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tips &#x26; Tricks</h3>\n<p><strong>Be careful</strong> not to confuse a constructor carrying 2 arguments with a constructor carrying a single tuple argument:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> account =\n  | <span class="hljs-type">Facebook</span>(string, int) <span class="hljs-comment">/* 2 arguments */</span>;\n<span class="hljs-keyword">type</span> account2 =\n  | <span class="hljs-type">Instagram</span>((string, int)) <span class="hljs-comment">/* 1 argument - happens to be a 2-tuple */</span>;</code></pre>\n      </div>\n<h4 id="variants-must-have-constructors"><a href="#variants-must-have-constructors" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Variants Must Have constructors</h4>\n<p>If you come from an untyped language, you might be tempted to try <code>type foo = int | string</code>. This isn\'t possible in Reason; you\'d have to give each branch a constructor: <code>type foo = Int(int) | String(int)</code>. Though usually, needing this might be an anti-pattern. The Design Decisions section below explains more.</p>\n<h4 id="interop-with-javascript"><a href="#interop-with-javascript" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Interop with JavaScript</h4>\n<p><em>This section assumes knowledge about BuckleScript\'s <a href="http://bucklescript.github.io/bucklescript/Manual.html#_ffi">FFI</a>. Skip this if you haven\'t felt the itch to use variants for binding to JS functions yet</em>.</p>\n<p>Quite a few JS libraries use functions that can accept many types of arguments. In these cases, it\'s very tempting to model them as variants. For example, suppose there\'s a <code>myLibrary.draw</code> JS function that takes in either a <code>number</code> or a <code>string</code>. You might be tempted to bind it like so:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-comment">/* reserved for internal usage */</span>\n[@bs.<span class="hljs-keyword">module</span> <span class="hljs-string">"myLibrary"</span>] external draw : \'a =&gt; unit = <span class="hljs-string">"draw"</span>;\n\n<span class="hljs-keyword">type</span> animal =\n  | <span class="hljs-type">MyFloat</span>(float)\n  | <span class="hljs-type">MyString</span>(string);\n\n<span class="hljs-keyword">let</span> betterDraw = (animal) =&gt;\n  <span class="hljs-keyword">switch</span> animal {\n  | <span class="hljs-type">MyFloat</span>(f) =&gt; draw(f)\n  | <span class="hljs-type">MyString</span>(s) =&gt; draw(s)\n  };</code></pre>\n      </div>\n<p>You could definitely do that, but there are better ways! For example, simply two <code>external</code>s that both compile to the same JS call:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code>[@bs.<span class="hljs-keyword">module</span> <span class="hljs-string">"myLibrary"</span>] external drawFloat : float =&gt; unit = <span class="hljs-string">"draw"</span>;\n[@bs.<span class="hljs-keyword">module</span> <span class="hljs-string">"myLibrary"</span>] external drawString : string =&gt; unit = <span class="hljs-string">"draw"</span>;</code></pre>\n      </div>\n<p>Or, get fancy and use an advanced feature of variant called GADT, then use BuckleScript\'s <a href="http://bucklescript.github.io/bucklescript/Manual.html#_phantom_arguments_and_ad_hoc_polymorphism">phantom argument FFI feature</a>. If these words mean absolutely nothing to you, no worries; just use the previous suggestion.</p>\n<h4 id="variant-types-are-found-by-field-name"><a href="#variant-types-are-found-by-field-name" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Variant Types Are Found By Field Name</h4>\n<p>Please refer to this <a href="/guide/language/record#record-types-are-found-by-field-name">record section</a>. Variants are the same: a function can\'t accept an arbitrary constructor shared by two different variants. Again, such feature exists, it\'s called a polymorphic variant. We\'ll talk about this in the future =).</p>\n<h3 id="design-decisions"><a href="#design-decisions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Design Decisions</h3>\n<p>Variant in its many forms (polymorphic variant, open variant, GADT, etc.) are likely <em>the</em> feature of a type system such as Reason\'s. The aforementioned <code>option</code> variant, for example, obliterates the need for nullable types, a major source of bugs in other languages. Philosophically speaking, a problem is composed of many possible branches/conditions. Mishandling these conditions is the majority of what we call bugs. <strong>A type system doesn\'t magically eliminates bugs; it points out the unhandled conditions and asks you to cover them</strong>*. The ability to model "this or that" correctly is crucial.</p>\n<p>For example, some folks wonder how the type system can safely eliminate badly formatted JSON data from propagating into their program. They don\'t, not by themselves! But if the parser returns the <code>option</code> type <code>None | Some(actualData)</code>, then you\'d have to handle the <code>None</code> case explicitly in later call sites. That\'s all there is.</p>\n<p>Performance-wise, a variant can potentially tremendously speed up your program\'s logic. Here\'s a piece of JavaScript:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-js"><code><span class="hljs-built_in">let</span> data = <span class="hljs-string">\'dog\'</span>;\n<span class="hljs-keyword">if</span> (data === <span class="hljs-string">\'dog\'</span>) {\n  ...\n} <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (data === <span class="hljs-string">\'cat\'</span>) {\n  ...\n} <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (data === <span class="hljs-string">\'bird\'</span>) {\n  ...\n}</code></pre>\n      </div>\n<p>There\'s a linear amount of branch checking here (<code>O(n)</code>). Compare this to using a Reason variant:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> animal = <span class="hljs-type">Dog</span> | <span class="hljs-type">Cat</span> | <span class="hljs-type">Bird</span>;\n<span class="hljs-keyword">let</span> data = <span class="hljs-type">Dog</span>;\n<span class="hljs-keyword">switch</span> data {\n| <span class="hljs-type">Dog</span> =&gt; ...\n| <span class="hljs-type">Cat</span> =&gt; ...\n| <span class="hljs-type">Bird</span> =&gt; ...\n}</code></pre>\n      </div>\n<p>The compiler sees the variant, then</p>\n<ol>\n<li>\n<p>conceptually turns them into <code>type animal = 0 | 1 | 2</code></p>\n</li>\n<li>\n<p>compiles <code>switch</code> to a constant-time format (<code>O(1)</code>).</p>\n</li>\n</ol>\n<p>You might wonder why typed functional languages are used so often for parsing; switching on a large tree efficiently and safely is pretty much the best-case scenario for variants.</p>\n<!-- TODO: playground link -->\n<p>Mind blown yet? Variants have a deep connection to other fields of mathematics; <a href="https://codewords.recurse.com/issues/three/algebra-and-calculus-of-algebraic-data-types">See here</a> for an interesting exploration.</p>\n<p>* It\'s always nicer to design away the problem rather than resorting to a type system to cover the pitfalls; In reality, it\'s unrealistic to do so for every problem, or even just to understand every problem fully in order to design a solution. A type system allows you to safely make a big category of changes to codebases without needing to understand the whole thing upfront. In this regard, types also allows us not needing to overly design an API just to circumvent callers\' simple pitfalls. They reduce the layers of abstractions needed to "get things done", which in return reduces callers\' cognitive burden.</p>',frontmatter:{title:"Variant!"}}}},pathContext:{section:"guide",sectionTitle:"Guide",relativePath:"guide/language/variant.md",relatedFiles:"/^guide\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---guide-language-variant-c050be4fde78b48d4e56.js.map