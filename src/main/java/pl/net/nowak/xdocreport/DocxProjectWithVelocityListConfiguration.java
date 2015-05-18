package pl.net.nowak.xdocreport;

import fr.opensagres.xdocreport.core.XDocReportException;
import fr.opensagres.xdocreport.document.IXDocReport;
import fr.opensagres.xdocreport.template.formatter.FieldsMetadata;
import org.springframework.web.servlet.view.xdocreport.IXDocReportConfiguration;

public class DocxProjectWithVelocityListConfiguration implements IXDocReportConfiguration
{

    public void configure( IXDocReport report )
        throws XDocReportException
    {
        FieldsMetadata metadata = report.createFieldsMetadata();
        metadata.load( "developers", Developer.class, true );
    }
}
