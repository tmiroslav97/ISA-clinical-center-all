package clinic.centersystem.service;


import clinic.centersystem.model.Codebook;
import clinic.centersystem.service.intf.CodebookService;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@NoArgsConstructor
public class CodebookServiceCont {

    @Autowired
    private CodebookService codebookService;

    public List<Codebook> getAll() {
        return codebookService.findAll();
    }

    public void add(Codebook codebook) {
        codebookService.save(codebook);
        return;
    }

}
