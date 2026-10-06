function grafico(parametros) {
    let svg = d3
        .select(parametros.seletor)
        .attr('width', parametros.largura)
        .attr('height', parametros.altura);

    let larguraPlotagem = parametros.largura - 40;
    let alturaPlotagem = parametros.altura - 40;

    let plotagem = svg
        .append('g')
        .attr('width', larguraPlotagem)
        .attr('height', alturaPlotagem)
        .attr('transform', 'translate(20, 20)');

    let fnX = d3
        .scaleLinear()
        .domain([0, parametros.dados.length])
        .range([0, larguraPlotagem]);
    let fnY = d3
        .scaleLinear()
        .domain([0, d3.max(parametros.dados)])
        .range([alturaPlotagem, 0]);

    plotagem
        .selectAll('.barra')
        .data(parametros.dados)
        .enter()
        .append('rect')
        .classed('barra', true)
        .attr('x', (d, i) => fnX(i))
        .attr('y', (d) => fnY(d))
        .attr('width', (d) => fnX(1) * 0.9)
        .attr('height', (d) => alturaPlotagem - fnY(d));

    plotagem
        .selectAll('.rotulo')
        .data(parametros.dados)
        .enter()
        .append('text')
        .classed('rotulo', true)
        .text((d) => d)
        .attr('x', (d, i) => fnX(i))
        .attr('dx', () => fnX(1) * 0.5)
        .attr('y', (d) => fnY(d))
        .attr('dy', -5);
}
