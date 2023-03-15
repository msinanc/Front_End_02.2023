export const TableComponent = () => {
    const products = [
        { id:301, name:'Cep Telefonu', price:5400.00 },
        { id:302, name:'Dizüstü Bilgisayar', price:4650.00 },
        { id:303, name:'Masaüstü Bilgisayar', price:3545.00 }
    ]
    return (
        <>
                <h1>Çizelge Bileşeni</h1>
            <table>
                {products.map(product =>
                    <tbody>
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                        </tr>
                    </tbody>
                )}
            </table>
        </>
    )
}