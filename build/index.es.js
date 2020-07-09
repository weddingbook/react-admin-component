import React from 'react';

var MyComponent = function () {
    return (React.createElement("div", null, "sample! 1\uC785\uB2C8\uB2E4"));
};

var MyComponent2 = function () {
    return (React.createElement("div", null,
        React.createElement("p", null, "\uADF8\uB7F0\uB370 \uC5B4\uB5BB\uAC8C \uD574\uC57C \uC5C5\uB370\uC774\uD2B8\uAC00 \uB418\uB294\uAC78\uAE4C?")));
};

export { MyComponent, MyComponent2 };
//# sourceMappingURL=index.es.js.map
