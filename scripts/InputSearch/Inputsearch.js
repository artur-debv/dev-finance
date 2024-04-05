const inputSearch = document.querySelector('.input_search');
        const tableRows = document.querySelectorAll('#data-table tbody tr');

        inputSearch.addEventListener('input', () => {
            const searchTerm = inputSearch.value.toLowerCase();
            tableRows.forEach(row => {
                const description = row.querySelector('td:first-child').textContent.toLowerCase();
                row.style.display = description.includes(searchTerm) ? 'table-row' : 'none';
            });
        });