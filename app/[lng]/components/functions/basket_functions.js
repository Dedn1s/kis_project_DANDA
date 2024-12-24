export function addToBasket(product) {
    alert("Товар в корзине");
    const ids = localStorage.getItem('basket');
    const pr = [product, 1];
    if (!ids) {
        const basket = [pr];
        localStorage.setItem('basket', JSON.stringify(basket))
    } else {
        const basket = JSON.parse(ids);
        const productIndex = basket.findIndex(item => item[0].id === product.id);
        if (productIndex == -1) {
            basket.push(pr);
        }
        localStorage.setItem('basket', JSON.stringify(basket))
    }
}

export function decreaseQuantity(productId) {
    const ids = localStorage.getItem('basket');

    if (ids) {
        const basket = JSON.parse(ids);
        const productIndex = basket.findIndex(item => item[0].id === productId);

        if (productIndex !== -1) {
            // Уменьшаем количество товара на 1
            basket[productIndex][1] -= 1;

            // Если количество стало 0, удаляем продукт из корзины
            if (basket[productIndex][1] <= 0) {
                basket.splice(productIndex, 1);
            }

            localStorage.setItem('basket', JSON.stringify(basket));
        }
    }
}

export function increaseQuantity(productId) {
    const ids = localStorage.getItem('basket');

    if (ids) {
        const basket = JSON.parse(ids);
        const productIndex = basket.findIndex(item => item[0].id === productId);

        if (productIndex !== -1) {
            // Увеличиваем количество товара на 1
            basket[productIndex][1] += 1;
            localStorage.setItem('basket', JSON.stringify(basket));
        }
    }
}

export function removeFromBasket(productId) {
    const ids = localStorage.getItem('basket');

    if (ids) {
        const basket = JSON.parse(ids);
        const updatedBasket = basket.filter(product => product[0].id !== productId);
        localStorage.setItem('basket', JSON.stringify(updatedBasket));
    }
}

export function finalPrise ()  {
    const ids = localStorage.getItem('basket');
    let ans = 0;

    if (ids) {
        const basket = JSON.parse(ids);
        for (const item of basket) {
            ans += item[0].price * item[1];
        }
    }
    return ans.toFixed(2);
}

