function grafico(parametros) {
    let svg = d3
        .select(parametros.seletor)
        .attr('width', parametros.largura)
        .attr('height', parametros.altura);

        let margem = {
            esquerda: 70,
            direita: 20,  
            superior: 40,
            inferior: 100,
        };

    let larguraPlotagem = parametros.largura - margem.esquerda - margem.direita;
    let alturaPlotagem = parametros.altura - margem.superior - margem.inferior;

    let plotagem = svg
        .append('g')
        .attr('width', larguraPlotagem)
        .attr('height', alturaPlotagem)
        .attr('transform', 'translate(' + margem.esquerda + ', ' + margem.superior + ')');

    let fnX = d3
        .scaleBand()
        .domain(parametros.dados.map((d) => d.chave))
        .range([0, larguraPlotagem])
        .padding(0.1);

    let fnY = d3
        .scaleLinear()
        .domain([0, d3.max(parametros.dados, (d) => d.valor)])
        .range([alturaPlotagem, 0]);

    let fnCores = d3
        .scaleOrdinal()
        .domain([0, parametros.dados.length])
        .range(d3.schemeCategory10);

    let eixoX = d3.axisBottom(fnX);
    plotagem
        .append('g')
        .attr('id', 'eixoX')
        .attr('transform', 'translate(0, ' + alturaPlotagem + ')')
        .call(eixoX);

        svg.append('text')
        .attr('x', margem.esquerda)
        .attr('y', margem.superior + alturaPlotagem)
        .style('text-anchor', 'middle')
        .attr('transform', 'translate('+larguraPlotagem / 2 + ', 80)')
        .text(parametros.tituloX);

    let eixoY = d3.axisLeft(fnY);
    plotagem
        .append('g')
        .attr('id', 'eixoY')
        .call(eixoY);

        let grade = d3.axisRight(fnY)
        .tickSize(larguraPlotagem)
        .tickFormat('');

    plotagem
        .append('g')
        .attr('id', 'grade')
        .call(grade);

        svg.append('text')
        .attr('x', 0)
        .attr('y', 0)
        .style('text-anchor', 'middle')
        .attr('transform', 'translate(30, ' + (margem.superior + alturaPlotagem / 2) + ') rotate(-90)')
        .text(parametros.tituloY);

    plotagem
        .selectAll('.barra')
        .data(parametros.dados)
        .enter()
        .append('rect')
        .classed('barra', true)
        .attr('x', (d) => fnX(d.chave))
        .attr('y', (d) => fnY(d.valor))
        .attr('width', fnX.bandwidth())
        .attr('height', (d) => alturaPlotagem - fnY(d.valor))
        .attr('fill', (d, i) => fnCores(i));

    plotagem
        .selectAll('.rotulo')
        .data(parametros.dados)
        .enter()
        .append('text')
        .classed('rotulo', true)
        .text((d) => d.valor)
        .attr('x', (d) => fnX(d.chave))
        .attr('dx', () => fnX.bandwidth() * 0.5)
        .attr('y', (d) => fnY(d.valor))
        .attr('dy', -5);
}
